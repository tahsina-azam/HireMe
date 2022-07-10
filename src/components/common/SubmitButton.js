import { LoadingButton } from '@mui/lab'
import React from 'react'

function LoadButton({title,loadButton}) {
  return (
    <div>
     <LoadingButton
                loading={loadButton}
                loadingIndicator="Loading..."
                type="submit"
                fullWidth
                variant="contained"   
              >
                {title}
    </LoadingButton>  
    </div>
  )
}

export default LoadButton;