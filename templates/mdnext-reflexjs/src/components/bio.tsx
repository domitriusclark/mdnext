export interface BioProps {
  heading: string;
  text?: React.ReactNode;
}

export function Bio({ heading, text, ...props }: BioProps) {
  return (
    <div {...props}>
      <h1 variant="heading.h1">{heading}</h1>
      {text ? (
        <p variant="text.lead" mt="4">
          {text}
        </p>
      ) : null}
    </div>
  );
}
