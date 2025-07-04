import type { Field as BaseApplicationField } from './types.js';
import type { Property } from './property-all.js';

export type FieldAll = Property &
  BaseApplicationField & {
    documentation?: string;

    enumFileName?: string;
    enumValues?: { name: string; value: string }[];
    fieldIsEnum?: boolean;
    columnName?: string;

    // Annotations
    skipClient?: boolean;
    skipServer?: boolean;

    filterableField?: boolean;
    transient?: boolean;
    columnRequired?: boolean;
    id?: boolean;

    autoGenerate?: boolean;
    nullable?: boolean;

    /**
     * Faker template passed to `faker.helpers.fake()`.
     * @see https://fakerjs.dev/api/helpers.html#fake
     */
    fakerTemplate?: string;

    // Validation
    fieldValidate?: boolean;
    unique?: boolean;
    maxlength?: number;

    // Temporary fields for Faker
    uniqueValue?: any[];

    // Java specific
    propertyJavaBeanName?: string;
    propertyDtoJavaType?: string;
    propertyJavaFilterType?: string;
    fieldInJavaBeanMethod?: string;
    fieldJavaBuildSpecification?: string;
    fieldJavadoc?: string;
    fieldJavaValueGenerator?: string;
    javaValueGenerator?: string;
    propertyJavaFilteredType?: string;
    liquibaseDefaultValueAttributeValue?: string;

    propertyJavaCustomFilter?: { type: string; superType: string; fieldType: string };

    // Blob
    fieldWithContentType?: boolean;
    contentTypeFieldName?: string;
    blobContentTypeText?: string;

    // Derived properties
    fieldTypeBinary?: boolean;
    fieldTypeDuration?: boolean;
    fieldTypeBoolean: boolean;
    fieldTypeTimed?: boolean;
    fieldTypeLocalDate?: boolean;
    fieldTypeDateTime?: boolean;
    fieldTypeLocalTime?: boolean;
    /** @deprecated */
    fieldTypeTemporal: boolean;
    /** @deprecated */
    fieldTypeCharSequence: boolean;
    /** @deprecated */
    fieldTypeNumeric: boolean;

    /** @deprecated */
    reference?: any;
    relationshipsPath?: string[];

    liquibaseDefaultValueAttributeName?: string;
    shouldDropDefaultValue?: boolean;
    shouldCreateContentType?: boolean;
    loadColumnType?: string;
    liquibaseGenerateFakeData?: boolean;
    columnType?: string;
    defaultValueComputed: any;
    defaultValue: any;
  };
