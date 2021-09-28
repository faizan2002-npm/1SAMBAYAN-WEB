import { useField } from "formik";
import { Editor as TinyMCEEditor } from 'tinymce';
import { Editor } from '@tinymce/tinymce-react';

import { IAllProps } from '@tinymce/tinymce-react';
interface EditorFieldProps extends IAllProps {
    label?: string;
    name: string;
}
const EditorField = (props: EditorFieldProps) => {
    const { label, name, ...otherProps } = props;
    const [field, meta] = useField(name);
    const type = 'text';
    const handleEditorChange = (value: string, _editor: TinyMCEEditor) => {
        field.onChange({ target: { type, name, value } });
    };

    const handleBlur = (e: unknown, editor: TinyMCEEditor) => {
        field.onBlur({ target: { name } });
    };

    return (
        <>
            {label && <label>{label}</label>}
            <Editor {...otherProps} value={field.value} onEditorChange={handleEditorChange} onBlur={handleBlur}></Editor>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}
export default EditorField;
