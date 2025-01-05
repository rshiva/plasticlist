import { View, Text, ScrollView, Linking, Pressable, SafeAreaView } from "react-native";
import { team } from "../data/team";
import { Image } from "expo-image";

type TeamMemberProps = {
  name: string;
  role?: string;
  credentials?: string;
  affiliation?: string;
  background?: string;
  current?: string;
  link?: string;
  status?: string;
  image?: string;
};

const TeamMember = ({
  name,
  role,
  credentials,
  affiliation,
  link,
  status,
  image,
}: TeamMemberProps) => (
  <Pressable onPress={() => link && Linking.openURL(link)} className="mb-4">
    <View className="flex-row items-center gap-3">
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-12 h-12 rounded-full"
          contentFit="cover"
          style={{ width: 75, height: 75, borderRadius: 100 }}
        />
      ) : (
        <View className="w-12 h-12 rounded-full bg-gray-200" />
      )}
      <View>
        <Text className="text-lg font-semibold">{name}</Text>
        {role && <Text className="text-gray-600">{role}</Text>}
        {credentials && <Text className="text-gray-600">{credentials}</Text>}
        {affiliation && <Text className="text-gray-600">{affiliation}</Text>}
        {status && <Text className="text-yellow-600">({status})</Text>}
      </View>
    </View>
  </Pressable>
);

const SectionTitle = ({ title }: { title: string }) => (
  <Text className="text-2xl font-bold mb-6 mt-8">{title}</Text>
);

export default function Team() {
  const {
    organization,
    origin,
    coreTeam,
    advisors,
    sponsors,
    specialThanks,
    additionalAcknowledgment,
  } = team[0];

  return (
    <SafeAreaView className="flex-1 bg-[#f8fcf8] px-4 p-8">
      <ScrollView className="flex-1 bg-[#f8fcf8] px-4 p-8">
        <Text className="text-3xl font-bold mb-2">{organization}</Text>

        <Text className="text-gray-600 mb-8 text-base">{origin.description}</Text>

        <SectionTitle title="Core Team" />
        <View className="mb-8">
          {coreTeam.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </View>

        <SectionTitle title="Advisors" />
        <View className="mb-8">
          {advisors.map((advisor, index) => (
            <TeamMember key={index} {...advisor} />
          ))}
        </View>

        <SectionTitle title="Sponsors" />
        <View className="mb-8">
          {sponsors.map((sponsor, index) => (
            <TeamMember key={index} {...sponsor} />
          ))}
        </View>

        <SectionTitle title="Special Thanks" />
        <View className="mb-4">
          <Text className="text-gray-600 leading-relaxed">
            {specialThanks.join(", ")}
          </Text>
        </View>

        <Text className="text-gray-500 italic mb-8">
          {additionalAcknowledgment}
        </Text>

        <View className="mt-8 pt-4 border-t border-gray-200">
          <Text className="text-xs text-gray-400">
            PlasticList. 'Data on Plastic Chemicals in Bay Area Foods'.
            plasticlist.org. Accessed Jan 03, 2025.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
