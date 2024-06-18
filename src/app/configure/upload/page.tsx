"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { ImageIcon, Loader, MousePointerSquareDashed } from "lucide-react";

import { cn } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";

import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const UploadPage = () => {

    const router = useRouter();
    const { toast } = useToast();

    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);

    const [isPending, startTransition] = useTransition();


    const { startUpload, isUploading } = useUploadThing("imageUploader", {
        onClientUploadComplete: ([data]) => {
            const configId = data.serverData.configId;

            startTransition(() => {
                router.push(`/configure/design?id=${configId}`);
            });
        },
        onUploadProgress: (p) => {
            setUploadProgress(p);
        }
    });

    const onDropAccepted = (acceptedFiles: File[]) => {
        startUpload(acceptedFiles, { configId: undefined });

        setIsDragOver(false);
    }

    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        const [file] = rejectedFiles;

        setIsDragOver(false);

        toast({
            title: `${file.file.type} type is not supported`,
            description: "please choose a PNG, JPG or JPEG image instead",
            variant: "destructive"
        });
    }

    return (
        <div className={cn(
            "relative h-full flex-1 my-16 w-full rounded-xl p-2 bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
            {
                "ring-blue-900/25 bg-blue-900/10": isDragOver
            }
        )}>
            <div className="relative w-full flex flex-1 flex-col justify-center items-center">
                <Dropzone
                    onDropAccepted={onDropAccepted}
                    onDropRejected={onDropRejected}
                    accept={{
                        "image/png": [".png"],
                        "image/jpg": [".jpg"],
                        "image/jpeg": [".jpeg"]
                    }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                >
                    {({ getRootProps, getInputProps, isDragActive }) => (
                        <div
                            className="h-full w-full flex-1 flex flex-col items-center justify-center"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {
                                isDragOver ?
                                    <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
                                    :
                                    isUploading || isPending
                                        ?
                                        <Loader className="animate-spin h-6 w-6 txt-zinc-500 mb-2" />
                                        :
                                        <ImageIcon className="h-6 w-6 text-zinc-500 mb-2" />
                            }

                            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                                {isUploading ? (
                                    <div className="flex flex-col items-center">
                                        <p>Uploading...</p>
                                        
                                        <Progress
                                            value={uploadProgress}
                                            className="mt w-40 h-2 bg-gray-300"
                                        />
                                    </div>
                                ) : isPending ? (
                                    <div className="flex flex-col items-center">
                                        <p>Redirecting, please wait...</p>
                                    </div>
                                ) : isDragOver ? (
                                    <p>
                                        <span className="font-semibold">Drop file</span>
                                        to upload
                                    </p>
                                ) : (
                                    <p>
                                        <span className="font-semibold">Click to upload </span>
                                        or drag &apos;n&apos; drop
                                    </p>
                                )}
                            </div>

                            {isPending ? null : (
                                <div className="text-xs text-zinc-500">PNG, JPG, JPEG</div>
                            )}
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    );
}

export default UploadPage;