//icon
import { Upload } from "lucide-react";

// react papaparse csv
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpload: (results: any) => void;
};

const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();
  // TODO: add a paywall
  return (
    <CSVReader onUploadAccepted={onUpload}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {({ getRootProps }: any) => (
        <Button size={"sm"} className="w-full lg:w-auto" {...getRootProps()}>
          <Upload className="mr-2 size-4" />
          Import
        </Button>
      )}
    </CSVReader>
  );
};

export default UploadButton;
