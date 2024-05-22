import { mapPostsToSelectable } from "@shopwp/common"

function PostSelect({
  settings,
  dispatch,
  name,
  options,
  label,
  isInt = false,
  disabled = false,
  help = false,
  useProductId = false,
}) {
  const { SelectControl } = wp.components
  const { useState, useEffect } = wp.element

  const [posts, setPosts] = useState(
    mapPostsToSelectable(options, useProductId)
  )

  const [selectedPost, setSelectedPost] = useState(posts[0].value)

  useEffect(() => {
    if (selectedPost) {
      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: name, value: parseInt(selectedPost) },
      })
    }
  }, [])

  function onChange(newVal) {
    setSelectedPost(newVal)

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: name, value: parseInt(newVal) },
    })
  }

  return (
    <SelectControl
      label={label}
      help={help}
      value={selectedPost}
      options={posts}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default PostSelect
