'use client';

interface SchemaProps {
  schema: object;
}

export default function BaseSchema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}