import { useClipboard } from '@chakra-ui/core';
import { Button } from '@chakra-ui/core';

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button aria-label="Copy text" role="button" onClick={onCopy}>
      {hasCopied ? 'Copied' : 'Copy'}
    </Button>
  );
}
