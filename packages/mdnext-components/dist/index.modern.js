import React, { Component } from 'react';
import { useClipboard, Button, Image as Image$1 } from '@chakra-ui/react';
import { useImage } from 'use-cloudinary';

function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return /*#__PURE__*/ React.createElement(
    Button,
    {
      'aria-label': 'Copy text',
      role: 'button',
      onClick: onCopy,
    },
    hasCopied ? 'Copied' : 'Copy',
  );
}

function Code({ children, className }) {
  const language = className.replace(/language-/, '');
  return /*#__PURE__*/ React.createElement(
    Highlight,
    Object.assign({}, defaultProps, {
      theme: theme,
      code: children.trim(),
      language: language,
    }),
    ({ className, style, tokens, getLineProps, getTokenProps }) =>
      /*#__PURE__*/ React.createElement(
        'pre',
        {
          className: className,
          style: {
            ...style,
            overflow: 'scroll',
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
          },
        },
        tokens.map((line, i) =>
          /*#__PURE__*/ React.createElement(
            'div',
            Object.assign(
              {
                key: i,
              },
              getLineProps({
                line,
                key: i,
              }),
            ),
            line.map((token, key) =>
              /*#__PURE__*/ React.createElement(
                'span',
                Object.assign(
                  {
                    key: key,
                  },
                  getTokenProps({
                    token,
                    key,
                  }),
                ),
              ),
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(CopyButton, {
          value: children.trim(),
        }),
      ),
  );
}

function Image({
  src,
  cloudName,
  publicId,
  transforms,
  width,
  height,
  lazy,
  ...props
}) {
  const {
    generateImageUrl,
    blurredPlaceholderUrl,
    ref,
    supportsLazyLoading,
    inView,
  } = useImage(cloudName); // Not using Cloudinary

  if (!publicId) {
    // Try to lazy load all images when { lazy === true }
    if (lazy) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          ref: !supportsLazyLoading ? ref : undefined,
          style: {
            width: `${width}px`,
            height: `${height}px`,
          },
        },
        inView ||
          (supportsLazyLoading &&
            /*#__PURE__*/ React.createElement(
              Image$1,
              Object.assign(
                {
                  src: src,
                  loading: 'lazy',
                  width: '100%',
                },
                props,
              ),
            )),
      );
    } else {
      // Otherwise, just use the Chakra image component
      return /*#__PURE__*/ React.createElement(
        Image$1,
        Object.assign(
          {
            src: src,
          },
          props,
        ),
      );
    } // Or if you are using Cloudinary, it will move to here
  } else {
    // lazy load w/ a blurred placeholder of the image that's loading
    if (lazy) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          ref: !supportsLazyLoading ? ref : undefined,
          style: {
            width: `${width}px`,
            height: `${height}px`,
            background: `no-repeat url(${blurredPlaceholderUrl(
              publicId,
              width,
              height,
            )})`,
          },
        },
        inView ||
          (supportsLazyLoading &&
            /*#__PURE__*/ React.createElement(
              Image$1,
              Object.assign(
                {
                  src: generateImageUrl({
                    delivery: {
                      publicId,
                    },
                    transformation: { ...transforms },
                  }),
                  loading: 'lazy',
                  width: '100%',
                },
                props,
              ),
            )),
      );
    } else {
      // Just render the image
      return /*#__PURE__*/ React.createElement(
        Image$1,
        Object.assign(
          {
            src: url,
            width: '100%',
          },
          props,
        ),
      );
    }
  }
}

export { Code, Image };
//# sourceMappingURL=index.modern.js.map
