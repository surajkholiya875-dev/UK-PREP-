import { normalizeTextKey } from '../syllabusHierarchy';
import { ART_CULTURE_PART_A } from './artCultureA';
import { ART_CULTURE_PART_B } from './artCultureB';
import { CSAT_PART_A } from './csatA';
import { CSAT_PART_B } from './csatB';
import { CURRENT_AFFAIRS_TOPICS } from './currentAffairs';
import { DISTRICTS_PART_A } from './districtsA';
import { DISTRICTS_PART_B } from './districtsB';
import { ECONOMY_PART_A } from './economyA';
import { ECONOMY_PART_B } from './economyB';
import { ECONOMY_PART_C } from './economyC';
import { ENVIRONMENT_PART_A } from './environmentA';
import { ENVIRONMENT_PART_B } from './environmentB';
import { ETHICS_ESSAY_TOPICS } from './ethicsEssay';
import { EXTRA_SUBJECTS_PART_A } from './extraSubjectsA';
import { EXTRA_SUBJECTS_PART_B } from './extraSubjectsB';
import { GENERAL_ENGLISH_TOPICS } from './generalEnglish';
import { GENERAL_HINDI_PART_A } from './generalHindiA';
import { GENERAL_HINDI_PART_B } from './generalHindiB';
import { INDIAN_HISTORY_ANCIENT_MEDIEVAL_PART_A } from './indianHistoryAncientMedievalA';
import { INDIAN_HISTORY_ANCIENT_MEDIEVAL_PART_B } from './indianHistoryAncientMedievalB';
import { INDIAN_HISTORY_MODERN_PART_A } from './indianHistoryModernA';
import { INDIAN_HISTORY_MODERN_PART_B } from './indianHistoryModernB';
import { INDIAN_WORLD_GEOGRAPHY_PART_A } from './indianWorldGeographyA';
import { INDIAN_WORLD_GEOGRAPHY_PART_B } from './indianWorldGeographyB';
import { POLITY_GOV_IR_PART_B } from './polityGovIrB';
import { POLITY_INDIAN_PART_A } from './polityIndianA';
import { POLITY_INDIAN_PART_B } from './polityIndianB';
import { POLITY_INDIAN_PART_C } from './polityIndianC';
import { POLITY_UTTARAKHAND_GOV_PART_A } from './polityUttarakhandGovA';
import { POLITY_UTTARAKHAND_GOV_PART_B } from './polityUttarakhandGovB';
import { SCIENCE_TECH_PART_A } from './scienceTechA';
import { SCIENCE_TECH_PART_B } from './scienceTechB';
import { SOCIETY_SOCIAL_JUSTICE_TOPICS } from './societySocialJustice';
import { TopicContentPackage } from './types';
import { UTTARAKHAND_GEOGRAPHY_PART_A } from './uttarakhandGeographyA';
import { UTTARAKHAND_GEOGRAPHY_PART_B } from './uttarakhandGeographyB';
import { UTTARAKHAND_GK_PART_A } from './uttarakhandGkA';
import { UTTARAKHAND_GK_PART_B } from './uttarakhandGkB';
import { UTTARAKHAND_HISTORY_PART_A } from './uttarakhandHistoryA';
import { UTTARAKHAND_HISTORY_PART_B } from './uttarakhandHistoryB';

export * from './types';

export const ALL_TOPIC_CONTENT_PACKAGES: TopicContentPackage[] = [
  ...UTTARAKHAND_GEOGRAPHY_PART_A,
  ...UTTARAKHAND_GEOGRAPHY_PART_B,
  ...INDIAN_WORLD_GEOGRAPHY_PART_A,
  ...INDIAN_WORLD_GEOGRAPHY_PART_B,
  ...UTTARAKHAND_HISTORY_PART_A,
  ...UTTARAKHAND_HISTORY_PART_B,
  ...INDIAN_HISTORY_ANCIENT_MEDIEVAL_PART_A,
  ...INDIAN_HISTORY_ANCIENT_MEDIEVAL_PART_B,
  ...INDIAN_HISTORY_MODERN_PART_A,
  ...INDIAN_HISTORY_MODERN_PART_B,
  ...POLITY_UTTARAKHAND_GOV_PART_A,
  ...POLITY_UTTARAKHAND_GOV_PART_B,
  ...POLITY_INDIAN_PART_A,
  ...POLITY_INDIAN_PART_B,
  ...POLITY_INDIAN_PART_C,
  ...POLITY_GOV_IR_PART_B,
  ...ECONOMY_PART_A,
  ...ECONOMY_PART_B,
  ...ECONOMY_PART_C,
  ...ENVIRONMENT_PART_A,
  ...ENVIRONMENT_PART_B,
  ...ART_CULTURE_PART_A,
  ...ART_CULTURE_PART_B,
  ...SCIENCE_TECH_PART_A,
  ...SCIENCE_TECH_PART_B,
  ...UTTARAKHAND_GK_PART_A,
  ...UTTARAKHAND_GK_PART_B,
  ...DISTRICTS_PART_A,
  ...DISTRICTS_PART_B,
  ...CURRENT_AFFAIRS_TOPICS,
  ...GENERAL_HINDI_PART_A,
  ...GENERAL_HINDI_PART_B,
  ...GENERAL_ENGLISH_TOPICS,
  ...CSAT_PART_A,
  ...CSAT_PART_B,
  ...SOCIETY_SOCIAL_JUSTICE_TOPICS,
  ...ETHICS_ESSAY_TOPICS,
  ...EXTRA_SUBJECTS_PART_A,
  ...EXTRA_SUBJECTS_PART_B,
];

export const TOTAL_CURATED_TOPICS = ALL_TOPIC_CONTENT_PACKAGES.length;

export const TOPIC_CONTENT_BY_NORMALIZED_TITLE: Map<string, TopicContentPackage> = new Map(
  ALL_TOPIC_CONTENT_PACKAGES.map((pkg) => [normalizeTextKey(pkg.topicTitle), pkg])
);
