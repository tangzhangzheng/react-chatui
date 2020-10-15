import React from 'react'
import PropTypes from 'prop-types'
import StyledFileList from './style'
import FilterList from "components/FilterList"
import FileCard from "components/FileCard"
import { animated } from 'react-spring'
import useStaggeredList from "hooks/useStaggeredList"
import fileData from "data/files"

function FileList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10)
  return (
    <StyledFileList {...rest}>
      <FilterList options={["最新文件优先", "按文件名排序"]}>
        {fileData.map((file, i) => (
          <animated.div key={file.id} style={trailAnimes[i]}>
            <FileCard key={file.id} fileProps={file} />
          </animated.div>
        ))}
      </FilterList>
    </StyledFileList>
  )
}


FileList.propTypes = {
  children: PropTypes.any
}

export default FileList

