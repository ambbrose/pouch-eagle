import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Steps } from "@/components/steps";

const ConfigureLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWidthWrapper className="flex flex-1 flex-col">
            <Steps />

            {children}
        </MaxWidthWrapper>
    );
}

export default ConfigureLayout;