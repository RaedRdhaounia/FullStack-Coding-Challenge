import { SafeAreaView, StyleProp } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';

export const SafeAreaWrapper = ({ children, backgroundColor }: { children: React.ReactElement, backgroundColor?: string }) => {
    const headerHeight = useHeaderHeight();

    return (
         <SafeAreaView style={{ flex: 1,  paddingTop: headerHeight, backgroundColor }} children={children} />
  );
}
   