import React from "react";

import { Button, Card } from "@material-tailwind/react";

export default function Resume() {
  return (
  <div className="w-full max-w-screen-2xl">
    <Card className="mt-8 h-fit p-10">
      <Button>Download Resume</Button>
    </Card>
  </div>
  );
}
