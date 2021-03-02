export default function Iframe({ src, style, title, ...rest }) {
  return <iframe src={src} style={style} title={title} {...rest} />;
}
