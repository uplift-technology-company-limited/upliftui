// Uplift custom UI components - enhanced versions of shadcn
// Re-exported with "Uplift" prefix to avoid conflicts with standard components

// Button
export {
  Button as UpliftButton,
  buttonVariants as upliftButtonVariants,
} from "./button";

// Card
export {
  Card as UpliftCard,
  CardHeader as UpliftCardHeader,
  CardFooter as UpliftCardFooter,
  CardTitle as UpliftCardTitle,
  CardAction as UpliftCardAction,
  CardDescription as UpliftCardDescription,
  CardContent as UpliftCardContent,
} from "./card";

// Dialog
export {
  Dialog as UpliftDialog,
  DialogClose as UpliftDialogClose,
  DialogContent as UpliftDialogContent,
  DialogDescription as UpliftDialogDescription,
  DialogFooter as UpliftDialogFooter,
  DialogHeader as UpliftDialogHeader,
  DialogOverlay as UpliftDialogOverlay,
  DialogPortal as UpliftDialogPortal,
  DialogTitle as UpliftDialogTitle,
  DialogTrigger as UpliftDialogTrigger,
} from "./dialog";

// Input
export { Input as UpliftInput } from "./input";

// Label
export { Label as UpliftLabel } from "./label";

// Logo (no conflict)
export * from "./logo";

// Tabs
export {
  Tabs as UpliftTabs,
  TabsList as UpliftTabsList,
  TabsTrigger as UpliftTabsTrigger,
  TabsContent as UpliftTabsContent,
} from "./tabs";
