import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../store/cart';
import { useTable } from 'react-table';

export const Cart = () => {

    const cartItems = useSelector(selectCart);

    const data = cartItems;

    const columns = [
        {
            Header: '',
            accessor: 'category',
        },
        {
            Header: '',
            accessor: 'image',
        },
        {
            Header: 'Назва товару',
            accessor: 'name',
        },
        {
            Header: 'Колір',
            accessor: 'color',
        },
        {
            Header: 'Оббивка',
            accessor: 'brand',
        },
        {
            Header: 'Кількість',
            accessor: 'quantity',
        },
        {
            Header: 'Ціна',
            accessor: 'price',
        }
    ]

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });


// data = [{
//     btnDelete: <Comp>,
//     name: {name: 
//     code: }
// }]

    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </Styles>
            );
            }

            const Styles = styled.div`
            padding: 1rem;
            
            table {
                border-spacing: 0;
                border-bottom: 2px solid #007042;
                
                thead {
                    background-color: #F5F5F5;
                    color: #007042;
                    font-weight: bold;
                    font-size: 1rem;
                }

                tr {
                :last-child {
                    td {
                    border-bottom: 0;
                    }
                }
                }
            
                th,
                td {
                margin: 0;
                padding: 1rem;
                border-right: none;
            
                :last-child {
                    border-right: 0;
                }
                }
            }
            `



{/* {!cartItems && <CartTable>
                <CartTableHeading>
                    <CartTableColumn>
                    <CartTableRow>

                    </CartTableRow>
                        <CartTableRow>

                        </CartTableRow>
                    </CartTableColumn>
                </CartTableHeading>
                {
                    cartItems.map(({ code, image, name }) =>

                        <Item key={code}>
                            <Image src={image} />
                            <Title>{name}</Title>
                        </Item>
                    )
                }
            </CartTable>
            } */
}