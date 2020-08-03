import { useClipboard } from '@chakra-ui/core';

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <button
      style={{
        borderRadius: '3px',
        border: '1px solid black',
        color: 'black',
        padding: '0.5em 1em',
        cursor: 'pointer',
        fontSize: '1.1em',
      }}
      onClick={onCopy}
    >
      {hasCopied ? "Copied" : "Copy"}
    </button>
  )
}
