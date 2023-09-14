import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  export default function About() {
    return (
      <div className="w-full max-w-screen-2xl ">
        
        <Card className="mt-8 flex flex-col lg:flex-column items-center pl-10" style={{ minHeight: "800px" }}>
          <CardBody className="lg:w-2/3 inline-block align-middle">
          <div className="lg flex justify-center items-center pt-20">
            <img
              src="/assets/images/cameron_polaroid.jpg"
              alt="Profile Image"
              className="w-64 h-64 rounded-full"
            />
          </div>
            <div className="pt-10">
              <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl"> {/* Adjust font size */}
                About Me
              </Typography>
              <Typography className="text-lg"> {/* Adjust font size */}
                I am a Full Stack Web Developer with experience in HTML, CSS, JavaScript, Responsive Web Design, Express.js, Node.js, MongoDB, and PWA. I am enrolled in a Full Stack Web Development Program at Vanderbilt University, learning and applying the latest frontend and backend technologies. Passionate about developing creative yet practical web applications.
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
  