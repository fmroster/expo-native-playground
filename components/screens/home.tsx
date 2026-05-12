import { Button as ButtonPrimitive, Host } from "@expo/ui/swift-ui";
import { buttonStyle, tint } from "@expo/ui/swift-ui/modifiers";
import * as React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";

export default function ButtonScreen() {
  const [imageIdx, setImageIdx] = React.useState(0);
  return (
    // <>
    //   <Image
    //     style={StyleSheet.absoluteFill}
    //     source={images[imageIdx]}
    //     placeholder={{ blurhash }}
    //     contentFit="cover"
    //     transition={1000}
    //   />

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        padding: 16,
        gap: 16,
      }}
    >
      <Button
        modifiers={[buttonStyle("glass")]}
        label="Glass button"
      />
      <Button
        modifiers={[buttonStyle("glassProminent")]}
        label="Glass Prominent"
      />
      <Button
        modifiers={[buttonStyle("glass")]}
        systemImage="camera"
        label="Take a photo"
      />
      <Button
        modifiers={[buttonStyle("glass")]}
        systemImage="square.and.arrow.up"
        label="Share with friends"
      />
      <Button
        modifiers={[buttonStyle("glass")]}
        systemImage="photo"
        label="View gallery"
      />
      <Button
        modifiers={[buttonStyle("glass")]}
        systemImage="gearshape"
        label="Edit settings"
      />
      <Button
        modifiers={[buttonStyle("glass")]}
        systemImage="person"
        label="View profile"
      />
      <Button
        modifiers={[buttonStyle("glass")]}
        systemImage="info.circle"
        label="About app"
      />
      <Button
        modifiers={[buttonStyle("glassProminent"), tint("orange")]}
        systemImage="questionmark.circle"
        label="Help & support"
      />
      <Button
        modifiers={[buttonStyle("glassProminent")]}
        role="destructive"
        systemImage="power"
        label="Sign out"
      />
      <View style={{ flexDirection: "row", gap: 16, justifyContent: "center" }}>
        <Button
          modifiers={[buttonStyle("glassProminent")]}
          onPress={() => setImageIdx(imageIdx - 1)}
          label="Prev"
        />
        <Button
          modifiers={[buttonStyle("glassProminent")]}
          onPress={() => setImageIdx(imageIdx + 1)}
          label="Next"
        />
      </View>
    </ScrollView>
    // </>
  );
}

function Button(
  props: React.ComponentProps<typeof ButtonPrimitive> & {
    style?: StyleProp<ViewStyle>;
  }
) {
  const { style, ...restProps } = props;
  return (
    <Host matchContents style={[style, { width: "100%" }]}>
      <ButtonPrimitive {...restProps}>{props.children}</ButtonPrimitive>
    </Host>
  );
}
