import React from "react";
import { Stepper, Step, CardHeader, Typography } from "@material-tailwind/react";
import Cart from "@/components/template/Cart";
import AddressForm from "@/components/template/AddressForm";
import PaymentMethod from "@/components/template/PaymentMethod";
import ConfirmatioPayment from "@/components/template/ConfirmatioPayment";

export default function Payment() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <>
      <div className="hidden md:block w-full py-4 px-8 bg-indigo-500">
        <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 m-0 place-items-center">
          <div className="w-full px-20 pt-4 pb-8">
            <Stepper
              activeStep={activeStep}
              lineClassName="bg-white/50"
              activeLineClassName="bg-white"
            >
              <Step
                className="h-4 w-4 !bg-white text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(3)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">تایید و پرداخت</Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-white text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(2)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">شیوه پرداخت</Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-white text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(1)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">آدرس ارسال</Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-white text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(0)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">سبد خرید</Typography>
                </div>
              </Step>
            </Stepper>
          </div>
        </CardHeader>
      </div>
      {/* /////////// */}
      {activeStep === 0 && <Cart setActiveStep={setActiveStep} />}
      {/* /////////// */}
      {activeStep === 1 && <AddressForm setActiveStep={setActiveStep} />}
      {/* /////////// */}
      {activeStep === 2 && <PaymentMethod setActiveStep={setActiveStep} />}
      {/* /////////// */}
      {activeStep === 3 && <ConfirmatioPayment />}
    </>
  );
}