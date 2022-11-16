export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'jobTitle',
      type: 'string'
    },
    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'string'
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'string'
    },
    {
      name: 'isCurrentlyWorking',
      title: 'Working',
      type: 'boolean'
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}]
    }
  ]
}
