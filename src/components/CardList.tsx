import { useState } from 'react';
import {
  SimpleGrid,
  useDisclosure,
  Box,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imageSelected, setImageSelected] = useState({} as Card);

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(card: Card): void {
    setImageSelected(card);
    onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid gap={10} columns={3}>
        {cards?.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card)}
          />

          //   <Box
          //     key={card.id}
          //     bg="gray.800"
          //     height="290px"
          //     borderRadius="lg"
          //     overflow="hidden"
          //     cursor="pointer"
          //     onClick={() => handleViewImage(card)}
          //   >
          //     <Image
          //       src={card.url}
          //       alt={card.title}
          //       height="190px"
          //       width="100%"
          //       objectFit="cover"
          //     />
          //     <Flex direction="column" px="25px" py="15px">
          //       <Text
          //         fontSize="2xl"
          //         fontWeight="bold"
          //         letterSpacing={1}
          //         isTruncated
          //       >
          //         {card.title}
          //       </Text>
          //       <Text fontSize="md" letterSpacing={2}>
          //         {card.description}
          //       </Text>
          //     </Flex>
          //   </Box>
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={imageSelected.url}
      />
    </>
  );
}
