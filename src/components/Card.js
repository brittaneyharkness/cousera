import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.


  return(
    <VStack borderRadius={10} bg={"white"}>
      <Image src={imageSrc} borderRadius={10}/>
      <VStack align="flex-start"p={4}>
        <Heading size="sm" color="black">{title}</Heading>
        <Text color="black">{description}</Text>
        <HStack>
          <Text color="black" fontWeight="bold">See more</Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
      

    </VStack>
  );
};

export default Card;
