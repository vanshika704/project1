// import { Button } from "@chakra-ui/react"
// import {
//   DrawerActionTrigger,
//   DrawerBackdrop,
//   DrawerBody,
//   DrawerCloseTrigger,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerRoot,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@chakra-ui/react"

// const Demo = () => {
//   return (
//     <DrawerRoot>
//       <DrawerBackdrop />
//       <DrawerTrigger asChild>
//         <Button variant="outline" size="sm">
//           Open Drawer
//         </Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader>
//           <DrawerTitle>Drawer Title</DrawerTitle>
//         </DrawerHeader>
//         <DrawerBody>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </DrawerBody>
//         <DrawerFooter>
//           <DrawerActionTrigger asChild>
//             <Button variant="outline">Cancel</Button>
//           </DrawerActionTrigger>
//           <Button>Save</Button>
//         </DrawerFooter>
//         <DrawerCloseTrigger />
//       </DrawerContent>
//     </DrawerRoot>
//   )
// }
// export default Demo;

import { Button, Card, Image, Text } from "@chakra-ui/react"

const Demo = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Living room Sofa</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  )
}
export default Demo;