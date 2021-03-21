import React, { Fragment } from 'react'
import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    Filter,
    List,
    RichTextField,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
    required
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text';

const DataFilter = (props:any) => (
    <Filter {...props}>
        <TextInput source="title" alwaysOn />
    </Filter>
)

export const EntryList = (props:any) => (
    <List filters={<DataFilter />} {...props} perPage={25}>
        <Datagrid rowClick="show">
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
)

const PostTitle = ({ record }:any) => {
    return <span>{record ? record.title : ''}</span>
}

export const EntryShow = (props:any) => (
    <Show title={<PostTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" addLabel={false} />
            <TextField source="title" addLabel={false} className="title" />
            <RichTextField source="info" addLabel={false} className="info" />
        </SimpleShowLayout>
    </Show>
)

export const EntryEdit = (props:any) => {
    return (
        <Edit {...props} undoable={false}>
            <SimpleForm>
                <TextField source="id" />
                <TextInput source="title" fullWidth validate={required()} />
                <RichTextInput source="info" fullWidth validate={required()} />
            </SimpleForm>
        </Edit>
    )
}

export const EntryCreate = (props:any) => (
    <Create {...props} undoable={false}>
        <SimpleForm redirect="list">
            <TextInput source="name" fullWidth validate={required()} />
            <RichTextInput source="info" fullWidth validate={required()} />
        </SimpleForm>
    </Create>
)
