// ==============================|| SafeAreaWrapper module ||============================== //

// ==============================|| IMPORTS

//-- native components imports
import { SafeAreaView } from "react-native";

//-- react native navigation imports
import { useHeaderHeight } from '@react-navigation/elements';

// ==============================|| SafeAreaWrapper component ||============================== //
/**
 * As the header bar style transparent we need to made a paading top for each screen as separator height --
 * To manages global screens styles
 * @name: SafeAreaWrapper
 * @prop {children} : React.ReactElement
 * @prop {backgroundColor} : string default is white
 * @param {props} props
 * @returns JSX.Element
 * @example
 * <SafeAreaWrapper children={<Screen/>} color="gray"/> 
 */
export const SafeAreaWrapper = ({ children, backgroundColor }: { children: React.ReactElement, backgroundColor?: string }) => {
//-------- getter header bar Height
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ flex: 1,  paddingTop: headerHeight, backgroundColor }} children={children} />
  );
}