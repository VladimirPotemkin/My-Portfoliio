export type Locale = 'ru' | 'en'

export type ThemeMode = 'light' | 'dark'

export type GitHubRequestStatus = 'idle' | 'loading' | 'success' | 'error'

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  topics: string[]
  updated_at: string
}

export interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  projects?: TimelineProject[]
}

export interface TimelineProject {
  id: string
  name: string
  description?: string
  images?: string[]
}

export interface SkillItem {
  name: string
  category: 'frontend' | 'state' | 'tooling' | 'design' | 'language' | 'test'
}

export interface ContactLink {
  type: 'email' | 'phone' | 'telegram' | 'github'
  label: string
  value: string
  href: string
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  year: number
  location?: string
}

export interface LanguageItem {
  name: string
  level: string
}

export interface AvailabilityInfo {
  location: string
  citizenship: string
  relocation: boolean
  businessTrips: boolean
  workModes: string[]
  employmentTypes: string[]
}

export interface CvSection {
  title: string
  items: string[]
}

export interface DeveloperProfile {
  fullName: string
  firstName: string
  role: string
  tagline: string
  summary: string
  experienceLabel: string
  availability: AvailabilityInfo
  contacts: ContactLink[]
  skills: SkillItem[]
  timeline: TimelineItem[]
  education: EducationItem[]
  languages: LanguageItem[]
  cvSections: CvSection[]
}
