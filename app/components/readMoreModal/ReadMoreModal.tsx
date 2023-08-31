import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import Container from "../Container";

export default function ReadMoreModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#cab169]">Read more...</Button>
      </AlertDialogTrigger>
      <Container>
        <AlertDialogContent className="py-4 text-black overflow-y-auto max-h-[100vh]">
          <AlertDialogHeader>
            <AlertDialogTitle className="pt-4">About Us</AlertDialogTitle>
            <AlertDialogDescription className="text-black overflow-y-auto max-h[300px] py-4"></AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="pb-4">
            <AlertDialogCancel>close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </Container>
    </AlertDialog>
  );
}
