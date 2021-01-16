import { Icon, IconProps } from 'reflexjs';

export interface MiniCardProps {
  icon: string;
  iconColor?: string;
  heading: string;
  text: string;
}

export function MiniCard({
  icon,
  iconColor,
  heading,
  text,
  ...props
}: MiniCardProps) {
  return (
    <div
      display="flex"
      alignItems="center"
      borderWidth="1"
      rounded="lg"
      p="4"
      {...props}
    >
      <div
        display="flex"
        alignItems="center"
        justifyContent="center"
        size="16"
        rounded="lg"
        mr="4"
        bg={iconColor}
      >
        <Icon size="10" color="white" name={icon} />
      </div>
      <div flex="1">
        <p variant="heading.h5" fontSize="lg" color={iconColor}>
          {heading}
        </p>
        <p mt="1" lineHeight="snug">
          {text}
        </p>
      </div>
    </div>
  );
}
