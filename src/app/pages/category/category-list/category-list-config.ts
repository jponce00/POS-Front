import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { Category } from "src/app/responses/category/category.response";
import icCategory from '@iconify/icons-ic/twotone-category';
import { ListTableMenu } from "src/app/commons/list-table-menu.interface";
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import icLabel from '@iconify/icons-ic/twotone-label';
import { GenericValidators } from "@shared/validators/generic-validators";
import icCalendarMonth from '@iconify/icons-ic/twotone-calendar-today';
import { TableColumns } from "@shared/models/list-table-interface";
import { SearchOptions } from "@shared/models/search-options-interface";

const searchOptions : SearchOptions[] = [
    {
        label: 'Nombre',
        value: 1,
        placeholder: 'Buscar por nombre',
        validation: [GenericValidators.defaultName],
        validation_desc: 'Solo se permite letras en esta búsqueda.',
        icon: 'icName'
    },
    {
        label: 'Descripción',
        value: 2,
        placeholder: 'Buscar por descripción',
        validation: [GenericValidators.defaultDescription],
        validation_desc: 'Solo se permite letras y números en esta búsqueda.',
        icon: 'icDescription'
    }
];

const menuItems: ListTableMenu[] = [
    {
        type: 'link',
        id: 'all',
        icon: icViewHeadline,
        label: 'Todos'
    },
    {
        type: 'link',
        id: 'Activo',
        value: 1,
        icon: icLabel,
        label: 'Activo',
        classes: {
            icon: 'text-green'
        }
    },
    {
        type: 'link',
        id: 'Inactivo',
        value: 0,
        icon: icLabel,
        label: 'Inactivo',
        classes: {
            icon: 'text-gray'
        }
    }
];

const tableColumns: TableColumns<Category>[] = [
    {
        label: 'Nombre',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'name',
        cssProperty: ['font-semibold', 'text-sm', 'text-left'],
        type: 'text',
        sticky: true,
        sort: true,
        sortProperty: 'name',
        visible: true,
        download: true
    },
    {
        label: 'Descripción',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'description',
        cssProperty: ['font-semibold', 'text-sm', 'text-left'],
        type: 'text',
        sticky: false,
        sort: true,
        sortProperty: 'description',
        visible: true,
        download: true
    },
    {
        label: 'F. de creación',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'auditCreateDate',
        cssProperty: ['font-semibold', 'text-sm', 'text-left'],
        type: 'datetime',
        sticky: false,
        sort: true,
        visible: true,
        download: true
    },
    {
        label: 'Estado',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'stateCategory',
        cssProperty: ['font-semibold', 'text-sm', 'text-left'],
        type: 'badge',
        sticky: false,
        sort: false,
        visible: true,
        download: true
    },
    {
        label: '',
        cssLabel: [],
        property: 'icEdit',
        cssProperty: [],
        type: "icon",
        action: 'edit',
        sticky: false,
        sort: false,
        visible: true,
        download: false
    },
    {
        label: '',
        cssLabel: [],
        property: 'icDelete',
        cssProperty: [],
        type: "icon",
        action: 'remove',
        sticky: false,
        sort: false,
        visible: true,
        download: false
    }
];

const filters = {
    numFilter: 0,
    textFilter: '',
    stateFilter: null,
    startDate: null,
    endDate: null
}

const inputs = {
    numFilter: 0,
    textFilter: '',
    stateFilter: null,
    startDate: null,
    endDate: null
}

export const componentSettings = {
    // ICONS:
    icCategory: icCategory,
    icCalendarMonth: icCalendarMonth,
    // LAYOUT SETTINGS:
    menuOpen: false,
    // TABLE SETTINGS:
    tableColumns: tableColumns,
    initialSort: 'Id',
    initialSortDir: 'desc',
    getInputs: inputs,
    buttonLabel: 'Editar',
    buttonLabel2: 'Eliminar',
    // SEARCH FILTROS:
    menuItems: menuItems,
    searchOptions: searchOptions,
    filters_dates_active: false,
    filters: filters,
    datesFilterArray: ['Fecha de creación'],
    columnsFilter: tableColumns.map((column) => { return {label: column.label, property: column.property, type: column.type} })
}