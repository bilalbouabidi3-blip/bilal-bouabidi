
import { Level, Teacher } from './types';

export const TEACHERS: Teacher[] = [
  { id: 1, name: 'الأستاذ أحمد فلاح', subject: 'الرياضيات', imageUrl: 'https://picsum.photos/seed/ahmed/400/400' },
  { id: 2, name: 'الأستاذة فاطمة الزهراء', subject: 'الفيزياء و الكيمياء', imageUrl: 'https://picsum.photos/seed/fatima/400/400' },
  { id: 3, name: 'الأستاذ يوسف العلمي', subject: 'علوم الحياة و الأرض', imageUrl: 'https://picsum.photos/seed/youssef/400/400' },
  { id: 4, name: 'الأستاذة مريم بناني', subject: 'اللغة الفرنسية', imageUrl: 'https://picsum.photos/seed/mariam/400/400' },
  { id: 5, name: 'الأستاذ كريم إدريسي', subject: 'اللغة الإنجليزية', imageUrl: 'https://picsum.photos/seed/karim/400/400' },
  { id: 6, name: 'الأستاذة هدى العلوي', subject: 'الفلسفة', imageUrl: 'https://picsum.photos/seed/houda/400/400' },
];

export const LEVELS: Level[] = [
  {
    id: 1,
    name: 'الجدع المشترك العلمي',
    subjects: [
      { id: 1, name: 'الرياضيات', price: 300 },
      { id: 2, name: 'الفيزياء و الكيمياء', price: 300 },
      { id: 3, name: 'علوم الحياة والأرض', price: 250 },
      { id: 4, name: 'اللغة الفرنسية', price: 250 },
    ],
  },
  {
    id: 2,
    name: 'الأولى باكالوريا علوم تجريبية',
    subjects: [
      { id: 1, name: 'الرياضيات', price: 350 },
      { id: 2, name: 'الفيزياء و الكيمياء', price: 350 },
      { id: 3, name: 'علوم الحياة والأرض', price: 300 },
      { id: 4, name: 'اللغة الفرنسية (الجهوي)', price: 400 },
    ],
  },
  {
    id: 3,
    name: 'الثانية باكالوريا علوم فيزيائية',
    subjects: [
      { id: 1, name: 'الرياضيات', price: 400 },
      { id: 2, name: 'الفيزياء و الكيمياء', price: 400 },
      { id: 3, name: 'علوم الحياة والأرض', price: 300 },
      { id: 4, name: 'اللغة الإنجليزية', price: 300 },
      { id: 5, name: 'الفلسفة', price: 250 },
    ],
  },
    {
    id: 4,
    name: 'الثانية باكالوريا علوم الحياة والأرض',
    subjects: [
      { id: 1, name: 'الرياضيات', price: 400 },
      { id: 2, name: 'الفيزياء و الكيمياء', price: 350 },
      { id: 3, name: 'علوم الحياة والأرض', price: 450 },
      { id: 4, name: 'اللغة الإنجليزية', price: 300 },
      { id: 5, name: 'الفلسفة', price: 250 },
    ],
  },
];
