import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Teacher', value: 'teacher' },
        { label: 'Student', value: 'student' },
      ],
      required: true,
    },

    //
    // Email added by default
    // Add more fields as needed
  ],
}
