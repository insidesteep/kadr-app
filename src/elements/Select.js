import { Select } from "antd";
import styled from "styled-components";


export const StyledSelect = styled(Select)`
  .ant-select-selection-selected-value {
    .ant-tag {
      position: absolute !important;
      right: 0px;
      top: 3px;
    }
  }
`;
