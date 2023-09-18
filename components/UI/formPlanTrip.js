import { Button, Input } from "@nextui-org/react";
import React from "react";

export const FormPlanTrip = () => {
  return (
    <section>
      <form>
        <div className="mt-2">
          <Input type="text" label="Name" color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="text" label="Last Name" color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="text" label="Country" color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="email" label="Email" color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="text" label="Cellphone" color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="date"  color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="text"  label='Number of adults' color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="text"  label='Number of Children (Specify Ages)' color="secondary" />
        </div>
        <div className="mt-2">
          <Input type="text"  label='Tell us about the experience you would like to have' color="secondary" />
        </div>
        <div className="mt-5 flex justify-center">
          <Button color='secondary'>Send</Button>
        </div>
      </form>


    </section>
  );
};
