import * as React from "react";
import { makeStyles } from "react-native-elements";
import { Image, ImageSourcePropType, FlatList } from "react-native";
import { useQuery } from "../../utils/hooks/useApolloClient";
import { GET_PICTURES_BY_ROLL } from "../../utils/helpers/queries";
import { getCloudinaryUrl } from "../../utils/helpers/cloudinaryHelper";
import { Colors, Picture } from "../../utils/types/types";
import TouchableOpacity from "../TouchableOpacity";
import { useNavigation } from "../../utils/hooks/useNavigation";
import { screenWidth } from "../../utils/helpers/constants";
import { computeScrollToValue } from "../../utils/helpers/galleryHelper";
import { ScreenList } from "../../navigation/NavigationContainer";

interface RollPicturesProps {
  rollId: number;
  listHeaderComponent: JSX.Element;
  backgroundColor: Colors;
}

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  item: {
    flex: 1 / 3,
    flexDirection: "column",
    margin: 1
  }
}));

const RollPictures: React.FC<RollPicturesProps> = ({
  rollId,
  listHeaderComponent,
  backgroundColor
}) => {
  const styles = useStyles();

  const { navigate } = useNavigation();
  const { data } = useQuery(GET_PICTURES_BY_ROLL, {
    variables: { rollId }
  });

  const pictures: Picture[] =
    data && data.getPicturesByRoll && data?.getPicturesByRoll;
  return (
    <FlatList
      data={pictures}
      ListHeaderComponent={listHeaderComponent}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigate<ScreenList>("PicturesGallery", {
              rollId,
              pictures,
              backgroundColor,
              computedScrollToOffset: computeScrollToValue(
                pictures,
                index,
                screenWidth
              )
            })
          }
        >
          <Image
            style={styles.imageThumbnail}
            source={
              {
                uri: getCloudinaryUrl(item.cloudinaryPublicId, 50)
              } as unknown as ImageSourcePropType
            }
          />
        </TouchableOpacity>
      )}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default RollPictures;
