import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Contact() {
    return (
    <Card className=" flex justify-center mt-8 h-fit p-10 ">
      <Card className="flex justify-center" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Contact
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill out the contact form below to get in touch. 
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Message" />
          </div>
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
    </Card>
    );
  }