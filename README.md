# react-tanstack-form-shadcn

A powerful form factory that combines [TanStack Form](https://tanstack.com/form) with [Shadcn UI](https://ui.shadcn.com/) components. Features built-in lazy loading, validation support, and a type-safe API.

## 🚀 Features

- **Pre-configured Components**: Includes Shadcn UI wrappers for common form fields (Input, Select, CheckBox, Switch, etc.).
- **Lazy Loading**: Field components are lazy-loaded for optimal performance.
- **Type Safety**: Full TypeScript support leveraging TanStack Form's type inference.
- **Validation**: Integrated with standard TanStack Form validation.

## 📦 Installation

```bash
npm install react-tanstack-form-shadcn
# Peer dependencies
npm install @tanstack/react-form @tanstack/react-query react react-dom
```

## 🛠️ Usage

### 1. Create your Form Factory

Use `createAppForm` to create a form instance with the default component registry.

```tsx
// src/hooks/useAppForm.ts
import { createAppForm } from "react-tanstack-form-shadcn";

// You can override or add components in the config if needed

export const { useAppForm, withFieldGroup, withForm } = createAppForm();
```

### 2. Define and Render a Form

```tsx
import { useAppForm } from "./hooks/useAppForm";
import { z } from "zod"; // Optional: for validation

export default function MyForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      marketingOptIn: false,
    },
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });

  return (
    <div>
      <h2 className="text-lg font-bold">Registration</h2>
      <form.Provider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Text Input */}
          <form.Field
            name="email"
            children={(field) => (
              // "Input" maps to the pre-registered Shadcn FieldInput component
              <field.Input
                label="Email Address"
                placeholder="hello@example.com"
              />
            )}
          />

          {/* Checkbox */}
          <form.Field
            name="marketingOptIn"
            children={(field) => (
              // "CheckBox" maps to the pre-registered Shadcn FieldCheckBox component
              <field.CheckBox label="Receive marketing emails" />
            )}
          />

          {/* Submit Button (using helper component) */}
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </button>
            )}
          />
        </form>
      </form.Provider>
    </div>
  );
}
```
# TanStack Form Custom Wrapper System

This project utilizes a highly customized and streamlined form management system (built on top of `@tanstack/react-form`) via the `useAppForm` hook and custom field components.

## 🚨 Common Pitfalls (What NOT to do)

❌ **NEVER DO THIS:** Manually assembling base UI components like `Input`, `Select`, `FieldError`, or `Label` inside `form.AppField`.

```tsx
// ❌ WRONG APPROACH (Do not do this)
<form.AppField name="amount">
  {(field) => (
    <div>
      <Input
        id={field.name}
        type="number"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      <FieldError errors={field.state.meta.errors} />
    </div>
  )}
</form.AppField>
```

## ✅ Best Practice (The Correct Way)

Always use the pre-built sub-components exposed by the `field` argument. These components automatically handle `label`, `description`, `value`, `onChange`, and **Error Messages** out of the box!

### 1. Using Input (`field.Input`)

You can pass `label`, `placeholder`, `description`, and any other standard `Input` props directly to it.

```tsx
// ✅ CORRECT APPROACH
<form.AppField name="amount">
  {(field) => (
    <field.Input 
      label="Amount" 
      type="number" 
      placeholder="Enter amount" 
      min="0" 
    />
  )}
</form.AppField>
```

### 2. Using TextArea (`field.TextArea`)

Similar to `field.Input`, but renders a multi-line textarea.

```tsx
<form.AppField name="notes">
  {(field) => (
    <field.TextArea 
      label="Additional Notes" 
      placeholder="Type your notes here..." 
      rows={4}
    />
  )}
</form.AppField>
```

### 3. Using Select (`field.Select`)

`field.Select` takes an `options` prop which is an Array of Objects `{ label: string, value: any }` (or grouped options). This eliminates the need to manually map and render `<SelectItem>` components.

```tsx
<form.AppField name="paidBy">
  {(field) => (
    <field.Select
      label="Paid By"
      placeholder="— Please Select —"
      options={members.map(m => ({
        label: `${m.emoji} ${m.name}`,
        value: m.id
      }))}
    />
  )}
</form.AppField>
```

### 4. Using CheckBox (`field.CheckBox`)

Renders a standard checkbox with a label alongside it. Great for boolean toggles or arrays of selected values.

```tsx
<form.AppField name="agreeToTerms">
  {(field) => (
    <field.CheckBox 
      label="I agree to the terms and conditions" 
      description="You must agree before continuing."
    />
  )}
</form.AppField>
```

### 5. Using Switch (`field.Switch`)

Renders a modern toggle switch. Behaves similarly to CheckBox.

```tsx
<form.AppField name="enableNotifications">
  {(field) => (
    <field.Switch 
      label="Enable Push Notifications" 
      description="Receive updates on your mobile device."
    />
  )}
</form.AppField>
```

### 6. Using Radio Group (`field.RadioGroup`)

Instead of rendering multiple radio buttons manually, `field.RadioGroup` takes an `items` array. You can also provide a `legend` (title for the group).

```tsx
<form.AppField name="paymentMethod">
  {(field) => (
    <field.RadioGroup
      legend="Payment Method"
      description="Choose how you want to pay"
      items={[
        { label: "Credit Card", value: "card", description: "Visa, MasterCard" },
        { label: "PromptPay", value: "promptpay", description: "Scan QR Code" },
        { label: "Cash", value: "cash" }
      ]}
    />
  )}
</form.AppField>
```

### 7. Using Submit Buttons (`form.SubscribeButton` or `form.Subscribe`)

If you need a submit button that binds to the form's state (e.g., disabling when submitting or invalid), use `form.SubscribeButton` (if available) or `form.Subscribe`.

```tsx
<form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
  {([canSubmit, isSubmitting]) => (
    <Button type="submit" disabled={!canSubmit || isSubmitting}>
      {isSubmitting ? "⏳ Loading..." : "Confirm"}
    </Button>
  )}
</form.Subscribe>
```

**Golden Rule:** Always use `field.[ComponentName]` to ensure consistency with the project's Design System and to drastically reduce boilerplate code!

## 🧩 Default Component Registry

The `createAppForm` factory comes with the following components lazy-loaded by default:

- **Input**: `FieldInput` (Text inputs)
- **Select**: `FieldSelect`
- **TextArea**: `FieldTextArea`
- **CheckBox**: `FieldCheckBox`
- **Switch**: `FieldSwitch`
- **RadioGroup**: `FieldRadioGroup`

## 📄 License

MIT
