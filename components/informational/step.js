export default Step=>({
".steps": {
    "@apply flex w-full gap-6": {}
  },
  ".steps-vertical": {
    "@apply w-fit flex-col items-center gap-2": {}
  },
  ".steps-horizontal": {
    "@apply w-full flex-row items-center gap-6": {}
  },
  ".step": {
    "@apply flex w-full flex-row items-center gap-2 whitespace-nowrap": {}
  },
  ".steps-horizontal .step": {
    "@apply w-full flex-row whitespace-nowrap": {}
  },
  ".steps-vertical .step": {
    "@apply flex w-fit flex-col items-center gap-2": {}
  },
  ".step-circle": {
    "@apply flex min-h-[2rem] min-w-[2rem] items-center justify-center rounded-full border border-base-300/47 bg-base-100 text-base-content": {}
  },
  ".step:not(:last-child):after": {
    "@apply relative h-px min-h-0 w-full min-w-[2rem] flex-1 bg-base-300 content-['']": {}
  },
  ".steps-horizontal .step:not(:last-child):after": {
    "@apply relative h-px min-h-0 w-full min-w-[2rem] flex-1 content-['']": {}
  },
  ".steps-vertical .step:not(:last-child):after": {
    "@apply relative h-full min-h-[2rem] w-px min-w-0 flex-1 content-['']": {}
  },
  ".step-done .step-circle": {
    "@apply border-primary/7 bg-primary/12 text-base-content": {}
  },
    ".step-primary.step-active .step-circle": {
    "@apply border-primary bg-primary text-white": {}
  },
  ".step-done.step-primary::after": {
    "@apply bg-primary/50": {}
  },
    ".step-done.step-secondary .step-circle": {
    "@apply border-secondary/7 bg-secondary/12 text-base-content": {}
  },
    ".step-secondary.step-active .step-circle": {
    "@apply border-secondary bg-secondary text-white": {}
  },
  ".step-done.step-secondary::after": {
    "@apply bg-secondary/50": {}
  },
      ".step-done.step-success .step-circle": {
    "@apply border-success/7 bg-success/12 text-base-content": {}
  },
    ".step-success.step-active .step-circle": {
    "@apply border-success bg-success text-white": {}
  },
  ".step-done.step-success::after": {
    "@apply bg-success/50": {}
  },
      ".step-done.step-danger .step-circle": {
    "@apply border-danger/7 bg-danger/12 text-base-content": {}
  },
    ".step-danger.step-active .step-circle": {
    "@apply border-danger bg-danger text-white": {}
  },
  ".step-done.step-danger::after": {
    "@apply bg-danger/50": {}
  },
      ".step-done.step-warning .step-circle": {
    "@apply border-warning/7 bg-warning/12 text-base-content": {}
  },
    ".step-warning.step-active .step-circle": {
    "@apply border-warning bg-warning text-white": {}
  },
  ".step-done.step-warning::after": {
    "@apply bg-warning/50": {}
  },


})