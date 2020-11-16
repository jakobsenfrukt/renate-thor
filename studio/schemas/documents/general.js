export default {
  name: 'general',
  type: 'document',
  title: 'General',
  fields: [
    {
      name: 'footer',
      type: 'footer',
      title: 'Footer'
    },
    {
      name: 'ogimg',
      type: 'image',
      title: 'Facebook image',
      description: 'Displayed when sharing the website on Facebook and other social media platforms if no other image is available.'
    }
  ],
  preview: {
    select: {
      body: 'lead'
    },
    prepare ({body = []}) {
      const block = body.find(block => block._type === 'block')
      return {
        title: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No title'
      }
    }
  }
}