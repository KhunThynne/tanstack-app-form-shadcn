import { AnyFieldApi } from '@tanstack/form-core';
import { AnyFormApi } from '@tanstack/form-core';
import { AppFieldExtendedReactFieldGroupApi } from '@tanstack/react-form';
import { AppFieldExtendedReactFormApi } from '@tanstack/react-form';
import { ComponentType } from 'react';
import { Context } from 'react';
import { DeepKeysOfType } from '@tanstack/form-core';
import { FieldApi } from '@tanstack/form-core';
import { FieldsMap } from '@tanstack/form-core';
import { FormAsyncValidateOrFn } from '@tanstack/form-core';
import { FormOptions } from '@tanstack/form-core';
import { FormValidateOrFn } from '@tanstack/form-core';
import { FunctionComponent } from 'react';
import { JSX } from 'react/jsx-runtime';
import { LazyExoticComponent } from 'react';
import { PropsWithChildren } from 'react';
import { ReactFormExtendedApi } from '@tanstack/react-form';
import { WithFieldGroupProps } from '@tanstack/react-form';
import { WithFormProps } from '@tanstack/react-form';

export declare const fieldContext: Context<AnyFieldApi>;

export declare const formContext: Context<AnyFormApi>;

declare type LazyComp = LazyExoticComponent<ComponentType<any>>;

declare function SubscribeButton({ label }: {
    label: string;
}): JSX.Element;

export declare const useAppForm: <TFormData, TOnMount extends FormValidateOrFn<TFormData> | undefined, TOnChange extends FormValidateOrFn<TFormData> | undefined, TOnChangeAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnBlur extends FormValidateOrFn<TFormData> | undefined, TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnSubmit extends FormValidateOrFn<TFormData> | undefined, TOnSubmitAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnDynamic extends FormValidateOrFn<TFormData> | undefined, TOnDynamicAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined, TSubmitMeta>(props: FormOptions<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta>) => AppFieldExtendedReactFormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta, {
readonly Input: LazyComp;
readonly Select: LazyComp;
readonly TextArea: LazyComp;
readonly CheckBox: LazyComp;
readonly Switch: LazyComp;
readonly RadioGroup: LazyComp;
}, {
readonly SubscribeButton: typeof SubscribeButton;
}>;

export declare const useFieldContext: <TData>() => FieldApi<any, string, TData, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>;

export declare const useFormContext: () => ReactFormExtendedApi<Record<string, never>, any, any, any, any, any, any, any, any, any, any, any>;

export declare const withFieldGroup: <TFieldGroupData, TSubmitMeta, TRenderProps extends object = {}>({ render, props, defaultValues, }: WithFieldGroupProps<TFieldGroupData, {
readonly Input: LazyComp;
readonly Select: LazyComp;
readonly TextArea: LazyComp;
readonly CheckBox: LazyComp;
readonly Switch: LazyComp;
readonly RadioGroup: LazyComp;
}, {
readonly SubscribeButton: typeof SubscribeButton;
}, TSubmitMeta, TRenderProps>) => <TFormData, TFields extends DeepKeysOfType<TFormData, TFieldGroupData | null | undefined> | FieldsMap<TFormData, TFieldGroupData>, TOnMount extends FormValidateOrFn<TFormData> | undefined, TOnChange extends FormValidateOrFn<TFormData> | undefined, TOnChangeAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnBlur extends FormValidateOrFn<TFormData> | undefined, TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnSubmit extends FormValidateOrFn<TFormData> | undefined, TOnSubmitAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnDynamic extends FormValidateOrFn<TFormData> | undefined, TOnDynamicAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined, TFormSubmitMeta>(params: PropsWithChildren<NoInfer<TRenderProps> & {
form: AppFieldExtendedReactFormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, unknown extends TSubmitMeta ? TFormSubmitMeta : TSubmitMeta, {
readonly Input: LazyComp;
readonly Select: LazyComp;
readonly TextArea: LazyComp;
readonly CheckBox: LazyComp;
readonly Switch: LazyComp;
readonly RadioGroup: LazyComp;
}, {
readonly SubscribeButton: typeof SubscribeButton;
}> | AppFieldExtendedReactFieldGroupApi<unknown, TFormData, string | FieldsMap<unknown, TFormData>, any, any, any, any, any, any, any, any, any, any, unknown extends TSubmitMeta ? TFormSubmitMeta : TSubmitMeta, {
readonly Input: LazyComp;
readonly Select: LazyComp;
readonly TextArea: LazyComp;
readonly CheckBox: LazyComp;
readonly Switch: LazyComp;
readonly RadioGroup: LazyComp;
}, {
readonly SubscribeButton: typeof SubscribeButton;
}>;
fields: TFields;
}>) => ReturnType<FunctionComponent>;

export declare const withForm: <TFormData, TOnMount extends FormValidateOrFn<TFormData> | undefined, TOnChange extends FormValidateOrFn<TFormData> | undefined, TOnChangeAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnBlur extends FormValidateOrFn<TFormData> | undefined, TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnSubmit extends FormValidateOrFn<TFormData> | undefined, TOnSubmitAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnDynamic extends FormValidateOrFn<TFormData> | undefined, TOnDynamicAsync extends FormAsyncValidateOrFn<TFormData> | undefined, TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined, TSubmitMeta, TRenderProps extends object = {}>({ render, props, }: WithFormProps<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta, {
readonly Input: LazyComp;
readonly Select: LazyComp;
readonly TextArea: LazyComp;
readonly CheckBox: LazyComp;
readonly Switch: LazyComp;
readonly RadioGroup: LazyComp;
}, {
readonly SubscribeButton: typeof SubscribeButton;
}, TRenderProps>) => FunctionComponent<PropsWithChildren<NoInfer<[unknown] extends [TRenderProps] ? any : TRenderProps> & {
form: AppFieldExtendedReactFormApi<[unknown] extends [TFormData] ? any : TFormData, [FormValidateOrFn<TFormData> | undefined] extends [TOnMount] ? [TOnMount] extends [TOnMount & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnMount : TOnMount, [FormValidateOrFn<TFormData> | undefined] extends [TOnChange] ? [TOnChange] extends [TOnChange & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnChange : TOnChange, [FormValidateOrFn<TFormData> | undefined] extends [TOnChangeAsync] ? [TOnChangeAsync] extends [TOnChangeAsync & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnChangeAsync : TOnChangeAsync, [FormValidateOrFn<TFormData> | undefined] extends [TOnBlur] ? [TOnBlur] extends [TOnBlur & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnBlur : TOnBlur, [FormValidateOrFn<TFormData> | undefined] extends [TOnBlurAsync] ? [TOnBlurAsync] extends [TOnBlurAsync & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnBlurAsync : TOnBlurAsync, [FormValidateOrFn<TFormData> | undefined] extends [TOnSubmit] ? [TOnSubmit] extends [TOnSubmit & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnSubmit : TOnSubmit, [FormValidateOrFn<TFormData> | undefined] extends [TOnSubmitAsync] ? [TOnSubmitAsync] extends [TOnSubmitAsync & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnSubmitAsync : TOnSubmitAsync, [FormValidateOrFn<TFormData> | undefined] extends [TOnDynamic] ? [TOnDynamic] extends [TOnDynamic & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnDynamic : TOnDynamic, [FormValidateOrFn<TFormData> | undefined] extends [TOnDynamicAsync] ? [TOnDynamicAsync] extends [TOnDynamicAsync & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnDynamicAsync : TOnDynamicAsync, [FormValidateOrFn<TFormData> | undefined] extends [TOnServer] ? [TOnServer] extends [TOnServer & (FormValidateOrFn<TFormData> | undefined)] ? any : TOnServer : TOnServer, [unknown] extends [TSubmitMeta] ? any : TSubmitMeta, {
readonly Input: LazyComp;
readonly Select: LazyComp;
readonly TextArea: LazyComp;
readonly CheckBox: LazyComp;
readonly Switch: LazyComp;
readonly RadioGroup: LazyComp;
}, {
readonly SubscribeButton: typeof SubscribeButton;
}>;
}>>;

export { }
