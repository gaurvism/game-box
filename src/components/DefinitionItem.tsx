import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <dt>
        <Heading as="dt" fontSize="md" color="gray.500">
          {term}
        </Heading>
      </dt>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
