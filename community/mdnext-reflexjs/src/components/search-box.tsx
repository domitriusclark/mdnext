import { Icon } from 'reflexjs';

export interface SearchBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchBox({ ...props }: SearchBoxProps) {
  return (
    <div borderWidth="1" rounded="lg" position="relative">
      <input
        placeholder="Type to search..."
        py="4"
        px="6"
        fontSize="lg"
        bg="transparent"
        w="100%"
        color="text"
        {...props}
      />
      <div
        display="flex"
        position="absolute"
        top="0"
        right="0"
        px="4"
        bottom="0"
        bg="background"
        alignItems="center"
        justifyContent="center"
        rounded="lg"
        opacity="0.5"
      >
        <Icon name="search" size="6" />
      </div>
    </div>
  );
}
