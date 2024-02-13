import React from 'react';
import { View, Button, Platform, PermissionsAndroid, Alert } from 'react-native';
import RNFS from "react-native-fs"
import FileViewer from 'react-native-file-viewer';

interface DocumentViewerProps {
  name : string;
  documentUrl: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ name, documentUrl }) => {

  function getUrlExtension(url: any) {
    return url.split(/[#?]/)[0].split(".").pop().trim();
  }
  
  const handleOpenDocument = async () => {
    try {

      const extension = getUrlExtension(documentUrl);

      const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension}`;

      const options = {
        fromUrl: documentUrl,
        toFile: localFile,
      };
      RNFS.downloadFile(options)
        .promise.then(() => FileViewer.open(localFile))
        .then(() => {
          // success
        })
        .catch((error) => {
          // error
        });

    } catch (error) {
      console.error('Error opening document:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title={name} onPress={handleOpenDocument} />
    </View>
  );
};

export default DocumentViewer;
