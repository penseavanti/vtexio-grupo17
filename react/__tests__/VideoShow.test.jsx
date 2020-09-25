import React from 'react'
import { render } from '@vtex/test-tools/react'
import VideoShow from '../VideoShow'

test('should render the Hello!', () => {
  const { getByText } = render(
    <VideoShow videoUrl="https://video.com" repeat={0} />
  )

  const element = getByText(/Hello world/)

  expect(element).toBeDefined()
})
