import React from 'react'
import PropTypes from 'prop-types'
import StyledFileCard, { FileName, FileSize, Options, Time, FileIcon } from './style'
import { ReactComponent as FileZip } from 'assets/icon/fileZip.svg'
import { ReactComponent as FileExcel } from 'assets/icon/fileExcel.svg'
import { ReactComponent as FileWord } from 'assets/icon/fileWord.svg'
import { ReactComponent as FilePpt } from 'assets/icon/filePpt.svg'
import { ReactComponent as FileImage } from 'assets/icon/fileImage.svg'
import { ReactComponent as FilePdf } from 'assets/icon/filePdf.svg'
import Icon from 'components/Icon'
import { ReactComponent as OptionIcon } from "assets/icon/options.svg"

const fileIcons = {
  zip: FileZip,
  image: FileImage,
  pdf: FilePdf,
  word: FileWord,
  excel: FileExcel,
  ppt: FilePpt

}

function FileCard({ children, fileProps, ...rest }) {

  return (
    <StyledFileCard fileProps={fileProps} {...rest}>
      <FileIcon icon={FileZip} />
      <FileName>{fileProps.name}</FileName>
      <FileSize>{fileProps.size}</FileSize>
      <Options>
        <Icon icon={OptionIcon} opacity={0.3} />
      </Options>
      <Time>{fileProps.updatedAt}</Time>
    </StyledFileCard>
  )
}


FileCard.propTypes = {
  children: PropTypes.any
}

export default FileCard

