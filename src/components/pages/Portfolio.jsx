import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Portfolio() {
  return (
    <div className="w-full max-w-screen-2xl">
      <Card className="mt-8 h-fit">
        <div className="p-16">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Projects
          </Typography>
        </div>
        <div className=" mx-auto grid grid-cols-2 gap-4 justify-evenly items-center p-5">
          <Card className="mt-6 w-full lg:mr-6 ">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="./assets/images/social-network-api.png"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Social Media API
              </Typography>
              <Typography>
                A Social Network API that utilizes NoSQL, Express.js, and
                Mongoose that can be used for a social network application.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://github.com/cameronfrench/social-network-api">
                <Button>View Project</Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-full lg:mr-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="./assets/images/Weather-Dashboard.png"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Weather Dashboard
              </Typography>
              <Typography>
                A Weather Dashboard that incorporates a search function by City,
                to which then current weather of that city would display as well
                as a 5 Day Forecast.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://github.com/cameronfrench/weather-dashboard">
                <Button>View Project</Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-full lg:mr-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="./assets/images/readme-generator.png"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Professional README Generator
              </Typography>
              <Typography>
                A command-line application that generates a professional
                README.md file for the project you are working on.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://github.com/cameronfrench/professional-readme-generator">
                <Button>View Project</Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="./assets/images/Note-Taker.png"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Note Taker
              </Typography>
              <Typography>
                A Note Taker application that takes input for a note, consisting
                of a note title and note text. You can then save that note and
                it will appear on the left side of the screen.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://github.com/cameronfrench/note-taker">
                <Button>View Project</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </Card>
    </div>
  );
}
