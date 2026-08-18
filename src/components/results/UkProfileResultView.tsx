import React, { useState, useEffect } from 'react';
import {
  User,
  MapPin,
  Briefcase,
  Home,
  Tv,
  Heart,
  Copy,
  Check,
  BookmarkPlus,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Smartphone,
  Wifi,
  Coins,
  Building,
} from 'lucide-react';
import { ResultLayout } from './ResultLayout';
import { getResult, StoredResult } from '../../utils/resultStore';
import { UKProfile } from '../../types';
import { saveProfile, getSavedProfiles } from '../../utils/storage';
import { formatProfileAsText, ConsistencyReport } from '../../utils/generator';
import { InteractiveUKMap } from '../InteractiveUKMap';

export interface UkProfileStoredData {
  profile: UKProfile;
  consistencyReport?: ConsistencyReport;
}

interface UkProfileResultViewProps {
  resultId: string;
  onNavigate: (path: string) => void;
}

export const UkProfileResultView: React.FC<UkProfileResultViewProps> = ({
  resultId,
  onNavigate,
}) => {
  const [storedRecord, setStoredRecord] = useState<StoredResult<UkProfileStoredData> | null>(() => {
    return getResult<UkProfileStoredData>('uk-profile', resultId);
  });
  const [isSaved, setIsSaved] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const rec = getResult<UkProfileStoredData>('uk-profile', resultId);
    setStoredRecord(rec);

    if (rec && rec.data && rec.data.profile) {
      const saved = getSavedProfiles();
      setIsSaved(saved.some((p) => p.id === rec.data.profile.id));
    }
  }, [resultId]);

  if (!storedRecord || !storedRecord.data || !storedRecord.data.profile) {
    return (
      <ResultLayout
        toolName="UK Profile"
        toolSlug="/uk-profile"
        resultId={resultId}
        resultTitle="Generated UK Profile"
        notFound={true}
        onNavigate={onNavigate}
      />
    );
  }

  const { profile, consistencyReport } = storedRecord.data;

  const handleSaveToLibrary = () => {
    saveProfile(profile);
    setIsSaved(true);
  };

  const handleCopyText = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formattedProfileText = formatProfileAsText(profile);

  return (
    <ResultLayout
      toolName="UK Profile"
      toolSlug="/uk-profile"
      resultId={resultId}
      resultTitle={`${profile.firstName} ${profile.lastName}`}
      resultSubtitle={`${profile.age} yrs • ${profile.gender} • ${profile.jobTitle} • ${profile.city}, ${profile.ukCountry || 'UK'}`}
      badgeLabel="GENERATED UK PROFILE"
      createdAt={storedRecord.createdAt}
      onNavigate={onNavigate}
      onGenerateAnother={() => onNavigate('/uk-profile')}
      generateAnotherLabel="Generate Another Profile"
      onCopyAll={() => formattedProfileText}
      jsonExportData={profile}
      jsonFileName={`uk-profile-${profile.firstName.toLowerCase()}-${profile.lastName.toLowerCase()}.json`}
    >
      <div className="space-y-6">
        {/* Profile Hero Header Card */}
        <div className="bg-black text-white border-2 border-black p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider">
                {profile.ukCountry || 'United Kingdom'}
              </span>
              <span className="px-2.5 py-1 bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider">
                {profile.profileType}
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              Profile ID: {profile.id}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Generated Identity
              </span>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {profile.firstName} {profile.lastName}
              </div>
              <div className="font-mono text-sm text-neutral-300 mt-1">
                {profile.jobTitle} • {profile.industry}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={handleSaveToLibrary}
                disabled={isSaved}
                className={`px-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
                  isSaved
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {isSaved ? <Check className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
                <span>{isSaved ? 'Saved to Library' : 'Save Profile'}</span>
              </button>

              <button
                onClick={() => handleCopyText(formattedProfileText, 'full-profile')}
                className="px-4 py-3 bg-neutral-800 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copiedField === 'full-profile' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === 'full-profile' ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Structured Demographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Personal & Demographic Identity */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <User className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Personal Identity & Demographics
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Full Name</span>
                <span className="font-bold text-black">{profile.firstName} {profile.lastName}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Gender</span>
                <span className="font-bold text-black">{profile.gender}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Exact Age & Group</span>
                <span className="font-bold text-black">{profile.age} years ({profile.ageGroup})</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Date of Birth</span>
                <span className="font-bold text-black">{profile.dateOfBirth}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Marital Status</span>
                <span className="font-bold text-black">{profile.maritalStatus}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Education Level</span>
                <span className="font-bold text-black">{profile.educationLevel || 'Undergraduate Degree'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Employment & Career */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Briefcase className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Employment & Professional Career
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Employment Status</span>
                <span className="font-bold text-emerald-700">{profile.employmentStatus}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Job Category</span>
                <span className="font-bold text-black">{profile.jobCategory}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Job Title</span>
                <span className="font-bold text-black">{profile.jobTitle}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Industry Sector</span>
                <span className="font-bold text-black">{profile.industry}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Work Arrangement</span>
                <span className="font-bold text-black">{profile.workingArrangement}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Gross Annual Income</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {profile.incomeRange}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Residence & Geographic Location */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <MapPin className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                UK Residence & Geography
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Country / Nation</span>
                <span className="font-bold text-black">{profile.ukCountry || 'England'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Region / County</span>
                <span className="font-bold text-black">{profile.region}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">City / Borough</span>
                <span className="font-bold text-black">{profile.city}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Sample Postcode</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {profile.samplePostcode}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Housing Type</span>
                <span className="font-bold text-black">{profile.housingType}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Tenure</span>
                <span className="font-bold text-black">{profile.homeOwnership}</span>
              </div>
            </div>
          </div>

          {/* Card 4: Household & Lifestyle */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Home className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Household & Media Profile
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Household Size</span>
                <span className="font-bold text-black">{profile.householdSize} Persons</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Number of Children</span>
                <span className="font-bold text-black">{profile.numberOfChildren} Dependents</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Smartphone & OS</span>
                <span className="font-bold text-black">{profile.smartphoneBrand} ({profile.operatingSystem})</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Home Broadband ISP</span>
                <span className="font-bold text-black">{profile.internetProvider}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Streaming Services</span>
                <span className="font-bold text-black text-right max-w-[60%]">
                  {profile.streamingServices.join(', ')}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Interests & Hobbies</span>
                <span className="font-bold text-black text-right max-w-[60%]">
                  {profile.interests.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive UK Map Component */}
        <div className="bg-white border-2 border-black p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                UK Regional Centroid Map
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              {profile.city}, {profile.region}
            </span>
          </div>

          <InteractiveUKMap
            highlightedRegion={profile.region}
            selectedProfile={profile}
          />
        </div>
      </div>
    </ResultLayout>
  );
};
