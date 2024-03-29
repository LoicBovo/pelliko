import * as React from "react";
import { makeStyles } from "react-native-elements";
import { RouteProp, useRoute } from "../../utils/hooks/useNavigation";
import { ParamList } from "../../navigation/NavigationContainer";
import { Picture, FlatList } from "../../components";
import { Picture as PictureType } from "../../utils/types/types";
import { getCloudinaryUrl } from "../../utils/helpers/cloudinaryHelper";

interface PicturesGalleryProps {}

const useStyles = makeStyles((theme) => ({}));

const PicturesGallery: React.FC<PicturesGalleryProps> = ({}) => {
  const styles = useStyles();
  const route = useRoute<RouteProp<ParamList, "PictureGalleryScreen">>();
  const { backgroundColor, pictures, computedScrollToOffset } = route?.params;
  const flatListRef = React.useRef<FlatList>(null);

  React.useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: computedScrollToOffset });
    }
  }, [computedScrollToOffset]);

  const renderItem = ({ item }: { item: PictureType }) => (
    <Picture
      url={getCloudinaryUrl(item.cloudinaryPublicId)}
      height={item.height}
      width={item.width}
      backgroundColor={backgroundColor}
      createdAt={item.createdAt}
      author={item.user}
    />
  );
  const getItemLayout = React.useCallback(
    (data, index) => ({
      length: 0,
      offset: computedScrollToOffset,
      index
    }),
    [computedScrollToOffset]
  );

  return (
    <FlatList
      ref={flatListRef}
      data={pictures}
      renderItem={renderItem}
      numColumns={1}
      keyExtractor={(item, index) => index.toString()}
      getItemLayout={getItemLayout}
    />
  );
};

export default PicturesGallery;
