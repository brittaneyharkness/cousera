import React, {useEffect} from "react";
import { Formik, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName:"",
      email:"",
      type: "",
      comment:""
    },
    onSubmit: async (values) => {
      console.log(values)
      await submit(values)
      
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .min(1,'Required')
                    .required("Required"),
      email:Yup.string()
                .email('Invalid email address')
                .required("Required"),
      comment: Yup.string()
                  .min(25,'Must be at least 25 characters')
                  .required("Required")
    }),
  });

useEffect(() => {

  function handleSubmission(e){
      console.log(e)
      onOpen(e.type, e.message)
  }

  handleSubmission(response)
  return() => {

  }

  

},[response])


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <Formik {...formik}>
            <form onSubmit={(e) => {e.preventDefault(); formik.handleSubmit(e)}}>
              <VStack spacing={4}>
                <FormControl isInvalid={formik.touched && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    {...formik.getFieldProps("firstName")}
                    id="firstName"
                    name="firstName"
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched && formik.errors.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                  {...formik.getFieldProps("email")}
                    id="email"
                    name="email"
                    type="email"
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select id="type" name="type">
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">
                      Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <FormControl isInvalid={formik.touched && formik.errors.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    {...formik.getFieldProps("comment")}
                    id="comment"
                    name="comment"
                    height={250}
                  />
                  { formik.touched && formik.errors.comment ? <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> : null}
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full" >
                  Submit
                </Button>
              </VStack>
            </form>
          </Formik>
          
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
