import { View, Text, Pressable, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRef, useState } from 'react';
import { ProductType } from '../app/types';
import { MapPin } from 'lucide-react-native';
import { Calendar } from 'lucide-react-native';

type Props = {
  product: ProductType;
  onBack: () => void;
};


type MeasurementView = 
  | 'ng_g'
  | 'ng_serving'
  | 'efsa_14kg'
  | 'epa_14kg'
  | 'efsa_70kg'
  | 'epa_70kg';

export function ProductDetail({ product, onBack }: Props) {
  const [measurementView, setMeasurementView] = useState<MeasurementView>('ng_g');
  const [showPicker, setShowPicker] = useState(false);

  const pickerRef = useRef<Picker>(null);

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const renderChemicalGroup = (title: string, data: { [key: string]: string | number }) => (
    <View className="bg-white rounded-lg p-4 mb-4">
      <View className="flex-row items-center mb-2">
        <View className="w-6 h-6 mr-2">
          <Text className="text-green-500">🛡️</Text>
        </View>
        <Text className="text-xl font-semibold">{title}</Text>
      </View>
      
      {Object.entries(data).map(([chemical, value]) => (
        <View key={chemical} className="flex-row justify-between py-1">
          <Text className="text-gray-700">{chemical}:</Text>
          <Text className="text-gray-900">{value}</Text>
        </View>
      ))}
    </View>
  );

  function getPhthalatesData(): getPhthalatesProps {
    switch (measurementView) {
      case 'ng_g':
        return {
          'DEHP': product.DEHP_ng_g,
          'DBP': product.DBP_ng_g,
          'BBP': product.BBP_ng_g,
          'DINP': product.DINP_ng_g,
          'DIDP': product.DIDP_ng_g,
        };
      case 'ng_serving':
        return {
          'DEHP': product.DEHP_ng_serving,
          'DBP': product.DBP_ng_serving,
          'BBP': product.BBP_ng_serving,
          'DINP': product.DINP_ng_serving,
          'DIDP': product.DIDP_ng_serving,
        };
      case 'efsa_14kg':
        return {
          'DEHP': product.DEHP_percent_tdi_14_kg_efsa,
          'DBP': product.DBP_percent_tdi_14_kg_efsa,
          'BBP': product.BBP_percent_tdi_14_kg_efsa,
          'DINP': product.DINP_percent_tdi_14_kg_efsa,
          'DIDP': product.DIDP_percent_tdi_14_kg_efsa,
        };
      case 'epa_14kg':
        return {
          'DEHP': product.DEHP_percent_tdi_14_kg_epa,
          'DBP': product.DBP_percent_tdi_14_kg_epa,
          'BBP': product.BBP_percent_tdi_14_kg_epa,
          'DINP': product.DINP_percent_tdi_14_kg_epa,
          'DIDP': product.DIDP_percent_tdi_14_kg_epa,
        };
      case 'efsa_70kg':
        return {
          'DEHP': product.DEHP_percent_tdi_70_kg_efsa,
          'DBP': product.DBP_percent_tdi_70_kg_efsa,
          'BBP': product.BBP_percent_tdi_70_kg_efsa,
          'DINP': product.DINP_percent_tdi_70_kg_efsa,
          'DIDP': product.DIDP_percent_tdi_70_kg_efsa,
        };
      case 'epa_70kg':
        return {
          'DEHP': product.DEHP_percent_tdi_70_kg_epa,
          'DBP': product.DBP_percent_tdi_70_kg_epa,
          'BBP': product.BBP_percent_tdi_70_kg_epa,
          'DINP': product.DINP_percent_tdi_70_kg_epa,
          'DIDP': product.DIDP_percent_tdi_70_kg_epa,
        };
      default:
        return {};
    }
  };

  function getBisphenolsData(): { [key: string]: string | number } {
    switch (measurementView) {
      case 'ng_g':
        return {
          'BPA': product.BPA_ng_g,
          'BPS': product.BPS_ng_g,
          'BPF': product.BPF_ng_g,
        };
      case 'ng_serving':
        return {
          'BPA': product.BPA_ng_serving,
          'BPS': product.BPS_ng_serving,
          'BPF': product.BPF_ng_serving,
        };
      case 'efsa_14kg':
        return {
          'BPA': product.BPA_percent_tdi_14_kg_efsa,
          'BPS': product.BPS_percent_tdi_14_kg_efsa,
          'BPF': product.BPF_percent_tdi_14_kg_efsa,
        };
      case 'epa_14kg':
        return {
          'BPA': product.BPA_percent_tdi_14_kg_epa,
          'BPS': product.BPS_percent_tdi_14_kg_epa,
          'BPF': product.BPF_percent_tdi_14_kg_epa,
        };
      case 'efsa_70kg':
        return {
          'BPA': product.BPA_percent_tdi_70_kg_efsa,
          'BPS': product.BPS_percent_tdi_70_kg_efsa,
          'BPF': product.BPF_percent_tdi_70_kg_efsa,
        };
      case 'epa_70kg':
        return {
          'BPA': product.BPA_percent_tdi_70_kg_epa,
          'BPS': product.BPS_percent_tdi_70_kg_epa,
          'BPF': product.BPF_percent_tdi_70_kg_epa,
        };
      default:
        return {
          'BPA': 0,
          'BPS': 0,
          'BPF': 0,
        };
    }
  };

  function getAlternativePlasticizersData(): { [key: string]: string | number } {
    switch (measurementView) {
      case 'ng_g':
        return {
          'DEHT': product.DEHT_ng_g,
          'DEHA': product.DEHA_ng_g,
          'DINCH': product.DINCH_ng_g,
          'DIDA': product.DIDA_ng_g,
        };
      case 'ng_serving':
        return {
          'DEHT': product.DEHT_ng_serving,
          'DEHA': product.DEHA_ng_serving,
          'DINCH': product.DINCH_ng_serving,
          'DIDA': product.DIDA_ng_serving,
        };
      case 'efsa_14kg':
        return {
          'DEHT': product.DEHT_percent_tdi_14_kg_efsa,
          'DEHA': product.DEHA_percent_tdi_14_kg_efsa,
          'DINCH': product.DINCH_percent_tdi_14_kg_efsa,
          'DIDA': product.DIDA_percent_tdi_14_kg_efsa,
        };
      case 'epa_14kg':
        return {
          'DEHT': product.DEHT_percent_tdi_14_kg_epa,
          'DEHA': product.DEHA_percent_tdi_14_kg_epa,
          'DINCH': product.DINCH_percent_tdi_14_kg_epa,
          'DIDA': product.DIDA_percent_tdi_14_kg_epa,
        };
      case 'efsa_70kg':
        return {
          'DEHT': product.DEHT_percent_tdi_70_kg_efsa,
          'DEHA': product.DEHA_percent_tdi_70_kg_efsa,
          'DINCH': product.DINCH_percent_tdi_70_kg_efsa,
          'DIDA': product.DIDA_percent_tdi_70_kg_efsa,
        };
      case 'epa_70kg':
        return {
          'DEHT': product.DEHT_percent_tdi_70_kg_epa,
          'DEHA': product.DEHA_percent_tdi_70_kg_epa,
          'DINCH': product.DINCH_percent_tdi_70_kg_epa,
          'DIDA': product.DIDA_percent_tdi_70_kg_epa,
        };
      default:
        return {
          'DEHT': 0,
          'DEHA': 0,
          'DINCH': 0,
          'DIDA': 0,
        };
    }
  };

  const renderPicker = () => (
    <View className="border border-gray-200 rounded-lg bg-white">
      {Platform.OS === 'ios' ? (
        <>
          <Pressable 
            onPress={() => setShowPicker(true)}
            className="p-4 flex-row justify-between items-center"
          >
            <Text className="text-gray-700">
              {measurementOptions.find(opt => opt.value === measurementView)?.label}
            </Text>
            <Text>▼</Text>
          </Pressable>
          
          {showPicker && (
            <View className="absolute w-full bottom-0 bg-white">
              <Picker
                selectedValue={measurementView}
                onValueChange={(value) => {
                  setMeasurementView(value);
                  setShowPicker(false);
                }}
              >
                {measurementOptions.map(option => (
                  <Picker.Item 
                    key={option.value} 
                    label={option.label} 
                    value={option.value} 
                  />
                ))}
              </Picker>
            </View>
          )}
        </>
      ) : (
        <Picker
          selectedValue={measurementView}
          onValueChange={setMeasurementView}
          mode="dropdown"
        >
          {measurementOptions.map(option => (
            <Picker.Item 
              key={option.value} 
              label={option.label} 
              value={option.value} 
            />
          ))}
        </Picker>
      )}
    </View>
  );

  const measurementOptions = [
    { label: 'Nanograms per gram', value: 'ng_g' },
    { label: 'Nanograms per serving', value: 'ng_serving' },
    { label: 'EFSA Toddler %TDI (14kg)', value: 'efsa_14kg' },
    { label: 'EPA Toddler %RfD (14kg)', value: 'epa_14kg' },
    { label: 'EFSA Adult %TDI (70kg)', value: 'efsa_70kg' },
    { label: 'EPA Adult %RfD (70kg)', value: 'epa_70kg' },
  ];

  return (
    <ScrollView className="flex-1 m-4">
      <Pressable onPress={onBack} className="flex-row items-center mb-4">
        <Text className="text-blue-500">← Back to list</Text>
      </Pressable>

      <View className="mb-6">
        <Text className="text-3xl font-bold mb-4">{product.product}</Text>

        {/* <View className="flex  items-start mb-3 gap-2">
          <Text className=" mr-2">📅 Best Before</Text>
          <Text className="text-gray-600 pl-4">{product.expiration_date}</Text>
        </View>

        <View className="flex items-start mb-3 gap-2">
          <Text className=" mr-2 text-base">📍 Collected From</Text>
          <Text className="text-gray-600 pl-4"></Text>
        </View> */}

        <View className="flex items-start gap-4 mb-6">
          <View className="flex flex-row items-center gap-2">
            <Calendar className="text-blue-500" />
            <View>
              <Text className="font-medium">Best Before</Text>
              <Text className="text-gray-600">{product.expiration_date}</Text>
            </View>
          </View>
          <View className="flex flex-row items-center gap-2">
            <MapPin className="text-blue-500" />
            <View>
              <Text className="font-medium">Collected From</Text>
              <Text className="text-gray-600 text-wrap">
                {product.collected_at}
              </Text>
            </View>
          </View>
        </View>

        <View className="mb-4">
          <Text className="mb-2">Select Measurement View</Text>
          {renderPicker()}
        </View>

        {renderChemicalGroup("Phthalates", getPhthalatesData())}
        {renderChemicalGroup("Bisphenols", getBisphenolsData())}
        {renderChemicalGroup(
          "Alternative Plasticizers",
          getAlternativePlasticizersData()
        )}

        <View className="mt-4 mb-8">
          <Text className="text-gray-500 text-sm">
            Sample tested using {product.analysis_method_phthalates} method for
            phthalates, substitutes, and bisphenols.
          </Text>
          <Text className="text-gray-500 text-sm">
            Serving size analyzed: {product.serving_size_g}g
          </Text>
        </View>
      </View>
    </ScrollView>
  );
} 