import React from "react";

import { Button, Card } from "@material-tailwind/react";

export default function Resume() {
  return (
  <div className="w-full max-w-screen-2xl">
    <Card className="mt-8 h-fit p-10">
      <Button>
        <a href="./assets/docs/2023-Resume.pdf" download="2023-Resume.pdf">
        Download Resume
        </a>
        </Button>
    </Card>
  </div>
  );
}
