export default function Iframe({ src, style, ...rest }) {
  return (
    <iframe
      src='https://codesandbox.io/embed/vigorous-hill-ilzdv?fontsize=14&hidenavigation=1&theme=dark'
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden'
      }}
      title='vigorous-hill-ilzdv'
      allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
      sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      {...rest}
    />
  )
}